const productModel = require("./../models/product.model");

exports.addProduct = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const product = new Product(data);
    await product.save();
    res.status(200).send({ message: 'Successful add product' });
  } catch (error) {
    res.send(error);
  }
};