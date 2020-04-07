const productTable = 'CREATE TABLE product(id bigint auto_increment,name char(50),PRIMARY KEY (id))';

const getAllProducts = 'SELECT * FROM product';

const createProduct = 'INSERT INTO product SET ?';

const deleteProduct = 'DELETE FROM product WHERE id = ?';

const updateProduct = 'UPDATE product SET name=? where id=?';

module.exports = {productTable:productTable,
    getAllProducts:getAllProducts,
    createProduct:createProduct,
    deleteProduct:deleteProduct,
    updateProduct:updateProduct};