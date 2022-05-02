package crud;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Add
 */
@WebServlet("/Add")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Add() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Connect connect = new Connect();
		try {
			Connection connection = connect.getConnection();
			int slNo = Integer.parseInt(request.getParameter("slno")); 
			String businessCode = request.getParameter("businesscode");
			int customerNumber = Integer.parseInt(request.getParameter("customerid"));
			Date clearDate = java.sql.Date.valueOf(request.getParameter("cleardate"));
			int businessYear = Integer.parseInt(request.getParameter("businessyear"));
			String docID = request.getParameter("docid");
			Date postingDate = java.sql.Date.valueOf(request.getParameter("postingdate"));
			String areaBusiness = request.getParameter("areabusiness");
			Date documentCreateDate = java.sql.Date.valueOf(request.getParameter("documentcreatedate"));
			Date dueInDate = java.sql.Date.valueOf(request.getParameter("dueindate"));
			String invoiceCurrency = request.getParameter("invoicecurrency");
			String documentType = request.getParameter("documenttype");
			int postingID = Integer.parseInt(request.getParameter("postingid"));
			float totalOpenAmount = Float.parseFloat(request.getParameter("totalopenamount"));
			Date baselineCreateDate = java.sql.Date.valueOf(request.getParameter("baselinecreatedate"));
			String custPaymentTerms = request.getParameter("customerpaymentterm");
			String invoiceID = request.getParameter("invoiceid");
			
			PreparedStatement ps = null;
			String query = "INSERT into winter_internship (sl_no,business_code,cust_number,clear_date,business_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen,aging_bucket,is_deleted,predicted) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			ps = connection.prepareStatement(query);
			ps.setInt(1, slNo);
			ps.setString(2, businessCode);
			ps.setInt(3, customerNumber);
			ps.setDate(4, clearDate );
			ps.setInt(5, businessYear);
			ps.setString(6, docID);
			ps.setDate(7, postingDate);
			ps.setDate(8, documentCreateDate);
			ps.setDate(9, documentCreateDate);
			ps.setDate(10, dueInDate);
			ps.setString(11, invoiceCurrency);
			ps.setString(12, documentType);
			ps.setInt(13, postingID);
			ps.setString(14, areaBusiness);
			ps.setFloat(15, totalOpenAmount);
			ps.setDate(16, baselineCreateDate);
			ps.setString(17, custPaymentTerms);
			ps.setString(18, invoiceID);
			ps.setInt(19, 1);
			ps.setString(20, null);
			ps.setInt(21, 0);
			ps.setString(22, null);
			int check = ps.executeUpdate();
			if(check == 1) {
				response.getWriter().write(1);
			}else {
				response.getWriter().write(0);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
