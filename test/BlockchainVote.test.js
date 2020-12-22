const BlockchainVote = artifacts.require('./BlockchainVote.sol')

contract('BlockchainVote', (accounts) => {
    before(async () => {
        this.blockchainVote = await BlockchainVote.deployed()
    })

    it('deploys successfully', async () => {
        const address = await this.blockchainVote.totalVotes();
        assert.equal(address.toNumber(), 0);
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    // TODO: Write tests for testing all the functions

    it("adds candidate successfully", async () => {
        await this.blockchainVote.addCandidate("Peter");

        const candidate = await this.blockchainVote.candidates(1);
        assert.equal(candidate.name, "Peter");
        assert.equal(candidate.id, 1);
    })

    it("adds voter successfully", async () => {
        await this.blockchainVote.addVoter("asdasqwe123asdfr323");
        const count = await this.blockchainVote.voterCount();

        const voter = await this.blockchainVote.voters(1);
        assert.equal(voter, "asdasqwe123asdfr323");
        assert.equal(count.toNumber(), 1);
    })

    it("votes successfully", async () => {
        await this.blockchainVote.vote("asdasqwe123asdfr323", 1);
        const votes = await this.blockchainVote.totalVotes();

        assert.equal(votes.toNumber(), 1);
    })

    it("gets candidate successfully", async () => {
        const candidate = await this.blockchainVote.getCandidate(1);

        assert.equal(candidate, "Peter");
    })

    it("gets votes successfully", async () => {
        let vote = await this.blockchainVote.getCandidateVoteCount(1);

        assert(vote.toNumber(), 1);
    })

    it("gets voter's vote", async () => {
        let vote = await this.blockchainVote.getVoterVote("asdasqwe123asdfr323");
        assert(vote, "Peter");
    })
})
