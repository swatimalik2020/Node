const mysqlConnection = require('../configuration/db');
const productQueries = require('../configuration/scripts');
const Product = require('../models/productModel');

exports.getProducts = (request,response,next) => {
   mysqlConnection.query(productQueries.getAllProducts,(error,results,fields)=>{
      if(error){
         console.error('Error occurred adding product',error.stack);
         response.status(500).json({message:'Error occurred during product search. Please connect to application administrator'});
      }
      let responseJson = {
         products: results
      };
      response.status(200).json(responseJson);
   });
};

exports.createProduct = (request,response,next) => {
   const product = new Product(request.body.name,request.body.id);
   mysqlConnection.query(productQueries.createProduct,product,(error,results,fields)=>{
      if(error){
         console.error('Error occurred adding product',error.stack);
         response.status(500).json({message:'Error occurred during product creation. Please connect to application administrator'});
      }
      product.id = results.insertId;
      let responseJson = {
         message: 'Product is successfully created.',
         product: product
      };
      response.status(201).json(responseJson);
   });
};

exports.deleteProduct = (request,response,next) => {
   mysqlConnection.query(productQueries.deleteProduct,[request.params.productId],(error,results,fields)=>{
      if(error){
         console.error('Error occurred deleting product',error.stack);
         response.status(500).json({message:'Error occurred during product deletion. Please connect to application administrator'});
      }
      if(results.affectedRows===0) {
         console.log('No data found with provided id');
         response.status(404).json({message:`No data found with given product id : ${request.params.productId}`});
      }
      let responseJson = {
         message: 'Product is successfully deleted.'
      };
      response.status(200).json(responseJson);
   });
};

exports.updateProduct = (request,response,next) => {
   mysqlConnection.query(productQueries.updateProduct,[request.body.name,request.params.productId],(error,results,fields)=>{
      if(error){
         console.error('Error occurred updating product',error.stack);
         response.status(500).json({message:'Error occurred during product update. Please connect to application administrator'});
      }
      if(results.affectedRows===0) {
         console.log('No data found with provided id');
         response.status(404).json({message:`No data found with given product id : ${request.params.productId}`});
      }
      const product = new Product(request.body.name,request.params.productId);
      let responseJson = {
         message: 'Product is successfully updated.',
         product: product
      };
      response.status(200).json(responseJson);
   });
};