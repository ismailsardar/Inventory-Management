/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

const express = require("express");
const router = express.Router();

//Auth Verify Middleware
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
// Users Controller modules
const UsersController = require('../controllers/Users/UsersController');
// Brand Controller modules
const BrandsControllers = require('../controllers/Brands/BrandsControllers');
// Categories Controller modules
const CategoriesControllers = require('../controllers/Categories/CategoriesControllers');
// Customers Controller modules
const CustomersControllers = require('../controllers/Customers/CustomersControllers');
// Suppliers Controller modules
const SuppliersControllers = require('../controllers/Suppliers/SuppliersControllers');
// Expense Controller modules
const ExpenseType = require('../controllers/Expense/expenseTypeControllers');

// testing router
router.get("/", (req, res) => {
  res.send("This is tasting Router");
});

// users Router
router.post("/registration",UsersController.Registration);
router.post("/login",UsersController.Login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/recoverEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/verifyOtp/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/resetPassword",UsersController.resetPassword );

// Brand Routing
router.post("/createBrand",AuthVerifyMiddleware,BrandsControllers.CreateBrand);
router.post("/updateBrand/:id",AuthVerifyMiddleware,BrandsControllers.UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsControllers.BrandList);
router.get("/brandDropDown",AuthVerifyMiddleware,BrandsControllers.BrandDropDown);

// Categories Routing
router.post("/createCategories",AuthVerifyMiddleware,CategoriesControllers.CreateCategories);
router.post("/updateCategories/:id",AuthVerifyMiddleware,CategoriesControllers.UpdateCategories);
router.get("/categoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesControllers.CategoriesList);
router.get("/categoriesDropDown",AuthVerifyMiddleware,CategoriesControllers.CategoriesDropDown);

// Customers Routing
router.post("/createCustomers",AuthVerifyMiddleware,CustomersControllers.CreateCustomers);
router.post("/updateCustomers/:id",AuthVerifyMiddleware,CustomersControllers.UpdateCustomers);
router.get("/customersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersControllers.CustomersList);
router.get("/customersDropDown",AuthVerifyMiddleware,CustomersControllers.CustomersDropDown);

// Suppliers Routing
router.post("/createSuppliers",AuthVerifyMiddleware,SuppliersControllers.CreateSuppliers);
router.post("/updateSuppliers/:id",AuthVerifyMiddleware,SuppliersControllers.UpdateSuppliers);
router.get("/suppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersControllers.SuppliersList);
router.get("/suppliersDropDown",AuthVerifyMiddleware,SuppliersControllers.SuppliersDropDown);

// Expense Types Routing
router.post("/createExpense",AuthVerifyMiddleware,ExpenseType.CreateExpenseTypes);
router.post("/updateExpense/:id",AuthVerifyMiddleware,ExpenseType.UpdateExpenseTypes);
router.get("/expenseList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseType.ExpenseTypesList);
router.get("/expenseDropDown",AuthVerifyMiddleware,ExpenseType.ExpenseTypesDropDown);

module.exports = router;
