import { client } from "../../../lib/sanity";

const createUserInSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: "users",
      // _type: 'registereduser',
      _id: req.body.userWalletAddress,
      // firstname: req.body.firstname,
      // lastname: req.body.lastname,
      // email: req.body.email,
      // country: req.body.country,
      // address: req.body.address,
      // city: req.body.city,
      // state: req.body.state,
      // zipcode: req.body.zipcode,
      walletAddress: req.body.userWalletAddress,
      name: name,
    };

    await client.createIfNotExists(userDoc);

    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default createUserInSanity;
