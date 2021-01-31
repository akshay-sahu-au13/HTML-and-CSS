const express = require('express');
const router = express.Router();
const members = require('../../members');
const bodyParser = require('body-parser');
const uuid = require('uuid');


// Get All members
router.get('/', (req, res) => res.json(members)
);
// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Member with ID ${req.params.id} is not present` });
    }
});

// Create Member

router.post('/', (req, res) => {
    const newMember = {
        postId: "1",
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }

    if (!newMember.name || !newMember.email || !newMember.comment) {
        res.status(400).json({
            msg: `Please enter name, email and comment`
        })
    } else {
        members.push(newMember);
        res.json({
            New_member: newMember,
            Updated_list: members
        })
    }
});

// Update members

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {

                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                member.comment = updMember.comment ? updMember.comment : member.comment;

                res.json({msg: "Member updated", members})
            }
        })
        // console.log("Found")
    }
  else {
        res.status(400).json({ msg: `Member with ID ${req.params.id} is not present` });
    }
});

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id !== parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member with ID ${req.params.id} is not present` })
    }
});

module.exports = router;