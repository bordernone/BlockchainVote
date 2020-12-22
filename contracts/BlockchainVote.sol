pragma solidity ^0.5.0;

contract BlockchainVote {
    uint256 public totalVotes = 0;
    uint256 public candidateCount = 0;
    uint256 public voterCount = 0;

    struct Candidate {
        string name;
        uint256 id;
    }

    struct Voter {
        string addr;
    }

    struct Votes {
        string voterAddr;
        uint256 candidateId;
    }

    mapping(uint256 => Candidate) public candidates; // index => Candidate
    mapping(uint256 => Voter) public voters; // index => Voter
    mapping(string => uint256) votes; // voterAddr => candidateID
    mapping(uint256 => uint256) candidateVoteCount; // (candidateID => numberOfVotes)

    function addCandidate(string memory name) public {
        candidateCount++;
        candidates[candidateCount] = Candidate(name, candidateCount);
    }

    function addVoter(string memory addr) public {
        voterCount++;
        voters[voterCount] = Voter(addr);
    }

    function vote(string memory voterAddr, uint256 candidateId) public {
        votes[voterAddr] = candidateId;
        uint256 tempCount = candidateVoteCount[candidateId];
        tempCount++;
        candidateVoteCount[candidateId] = tempCount;
        totalVotes++;
    }

    function getCandidate(uint256 id) public view returns (string memory) {
        return candidates[id].name;
    }

    function getCandidateVoteCount(uint256 candidateId)
        public
        view
        returns (uint256)
    {
        return candidateVoteCount[candidateId];
    }

    function getVoterVote(string memory addr) public view returns (string memory) {
        return candidates[votes[addr]].name;
    }
}
