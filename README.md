# 📱 Restaurant Bill Splitter  

A **mobile web application** designed to simplify bill payments and splitting in restaurants.  

## 🚀 Overview  
By scanning a receipt, the app automatically extracts product details, stores them in **MongoDB**, and allows customers to easily split the bill among themselves.  

## ⚙️ Features  

- **Home Page**  
  - Simple design with a title, short description, and a **“Scan”** button.  

- **Receipt Scanning**  
  - A dedicated page with an icon, text, and two options:  
    - 📷 **Take a photo**  
    - 🖼️ **Upload from library**  
  - The selected image is sent to an **AI API**, which processes the receipt and extracts data.  
  - The result is stored in **MongoDB** and displayed to the user.  

- **Customer Management**  
  - A top section showing all customers included in the bill.  
  - A button to add new customers.  

- **Product Cards**  
  - Each card contains:  
    - 📝 Product name  
    - 💵 Price  
    - ✏️ Edit button  
    - 🗑️ Delete button  
  - Below the product, all customer names are displayed:  
    - Light green → customer did **not** select the product  
    - Dark green → customer **selected** the product  
  - If multiple customers select the same product → the price is split evenly.  

- **Summary Section** (bottom of the page)  
  - For each customer:  
    - Number of items selected  
    - Names and prices of selected items  
    - Total amount owed  

## 🛠️ Tech Stack  
- **Frontend**: React.js  
- **Backend**: Node.js / Express
- **Database**: MongoDB  
- **AI Processing**: External API for receipt recognition  

## ✅ Key Advantages  
- 100% optimized for **mobile use** (no desktop version).  
- AI-powered automation → minimal manual input.  
- Hassle-free bill splitting between multiple people.  
- Clean and intuitive interface.  
