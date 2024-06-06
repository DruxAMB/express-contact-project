const getContacts = (req, res) => {
    res.status(201).json({message: "Get all contacts"});
};

const createContact = (req, res) => {
    console.log(`The request body is:`, req.body);
    res.status(201).json({message: "Create contact"});

    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
};

const getContact = (req, res) => {
    res.status(201).json({message: `Get contact for ${req.params.id}`});
};

const updateContact = (req, res) => {
    res.status(201).json({message: `Update contact for ${req.params.id}`});
};

const deleteContact = (req, res) => {
    res.status(201).json({message: `Delete contact ${req.params.id}`});
};



module.exports = { getContacts, createContact, getContact, updateContact,deleteContact };