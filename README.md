# B2B INVOICE MANAGEMENT WEB APPLICATION
This project was conducted as a task in an ***internship*** under the ***Highradius Corporation***.  
The objective was to build an ***invoice management web application which could be used in a B2B field***. 
**`The web application could help the seller business to keep track of all the money that are owed by buyer businesses.`**

## Product Requirements Specification

### Idea about the problem-

The B2B world operates differently from the B2C or C2C world. 
Businesses work with other businesses on credit. 
When a buyer business orders goods from the seller business, 
the seller business issues an invoice for the same. 
This invoice for the goods contains various information like the details of the goods purchased and when it should be paid. 
This is known in accounting terminology as “Accounts Receivable”.  
  
Seller business interacts with various businesses and sells goods to all of them at various times. 
Hence, the seller business needs to keep track of the total amount it owes from all the buyers. 
This involves keeping track of all invoices from all the buyers. 
Each invoice will have various important fields like a payment due date, invoice date, invoice amount, baseline date etc.  
  
The buyer business needs to clear its amount due before the due date. 
However, in real-world scenarios, the invoices are not always cleared ie. paid in full amount by the due date. 
The date on which a customer clears the payment for an invoice is called the payment date.   
  
### The objective of the Web Application is: 
- To build a `Full-stack Invoice Management Application` using `ReactJS`, `JDBC`, `Java`, `Servlets`. 
- Build a `responsive Receivables Dashboard`.
- `Visualize Data` in the form of `grids`. 
- `Visualize Data` in the form of `graphs`. 
- Perform `Searching` operations on the invoices. 
- `Add` & `Edit` data in the editable fields of the grid. 
- `Delete` data of selected rows in predefined templates. 


### The objectives for ML is:
- `View` the invoice data from various buyers. 
- See various fields/attributes of the invoice(s) from a particular buyer. 
- Perform `Data Pre-processing` on the invoice data. 
- Get `account-level analytics` to easily visualize and interpret data- `EDA` and 
`Feature Engineering`. 
- Get a `prediction` of when the invoice is going to get paid.


## Guide through the project
- [CODE FOR CLIENT(Using ReactJS)](client/src/)  
- [CODE FOR SERVER(Using JAVA)](server/src/main/java/crud/)  
- [Code ML(Using Jupyter Notebook - Python)](ml/HRC62283WK_RUDRASHIS_DUTTA_prediction.ipynb)  
- [DATASET](ml/dataset.csv?raw=true)  
- [OUTPUT DATASET ACQUIRED AFTER PERFORMING ML](ml/HRC62283WK_RUDRASHIS_DUTTA.csv?raw=true)  
- [SQL SETUP](database/H2H_Internship.sql?raw=true)

## Tools Used
- [Visual Studio Code](https://code.visualstudio.com/): `Visual Studio Code` was used for developing the front end of the web application using reactJS.  
- [Node.JS](https://nodejs.org/en/), [create_react_app](https://create-react-app.dev/): `Node.js` is an open-source, cross-platform, 
back-end JavaScript runtime environment 
that runs on the V8 engine and executes JavaScript code outside a web browser. 
`create_react_app` Node.JS package was used to set up a project to run a react application.  
- [ReactJS](https://reactjs.org/): `React` is a front-end JavaScript library for building user interfaces based on UI components. It was used to develop the front-end
of the web application.  
- [Eclipse](https://www.eclipse.org/), [JAVA](https://www.oracle.com/in/java/), [JDBC - Java Database Connectivity ](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html): `Eclipse` was used to develop the backend of the web application using `Java` and `JDBC`.
- [SqlYOG](https://webyog.com/product/sqlyog/): `SQLYOG` was used to set and manage the database.
- [Jupyter Notebook](https://jupyter.org/), [Anaconda Navigator](https://docs.anaconda.com/anaconda/navigator/index.html): 
`Jupyter Notebook` and `Anaconda` python environment were used to develop the code for ML.

## Screenshots of the Web Application
![image](https://user-images.githubusercontent.com/76852792/166222464-14f6ac89-4193-4e9d-ae40-8172b2d01db1.png)
![image](https://user-images.githubusercontent.com/76852792/166222483-b9dbdbad-d769-4a6e-8acc-50901de8963d.png)
![image](https://user-images.githubusercontent.com/76852792/166222496-6571c59a-7fb9-4e2b-9d17-b64993698338.png)
![image](https://user-images.githubusercontent.com/76852792/166222748-e0dfecd2-676b-480b-8596-43e5392f9f51.png)
![image](https://user-images.githubusercontent.com/76852792/166222836-eba46744-a310-428f-b598-d705ab47d166.png)
![image](https://user-images.githubusercontent.com/76852792/166222847-41c7ce5e-296d-4dae-a484-6ed5ca2cdb80.png)
![image](https://user-images.githubusercontent.com/76852792/166222856-63f9aa65-a047-42d6-90a8-d197991249e3.png)
![image](https://user-images.githubusercontent.com/76852792/166222866-308cbeeb-9ef8-449b-a656-33db27db5653.png)
![image](https://user-images.githubusercontent.com/76852792/166222880-808811fe-e7db-4690-9c03-a9750f5bbc03.png)
![image](https://user-images.githubusercontent.com/76852792/166222890-464e8f92-e7f8-40ea-be48-0af535ba65aa.png)
![image](https://user-images.githubusercontent.com/76852792/166222504-98c69800-12fb-4821-a812-1efabc3d89cc.png)
![image](https://user-images.githubusercontent.com/76852792/166222510-a34f091e-0bf7-4340-917b-4835d3f9cca1.png)
![image](https://user-images.githubusercontent.com/76852792/166222807-3a0be0c6-c5f1-4edc-9b02-e2afe087a203.png)
