package crud;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class View
 */
@WebServlet("/View")
public class View extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public View() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Connect connect = new Connect();
        try {

            Connection connection = connect.getConnection();
            Statement statement = connection.createStatement();
            String query = "select * from winter_internship where is_deleted = 0;";
            ResultSet resultSet = statement.executeQuery(query);
            List<Pojo> invoices = new ArrayList<>();
            
            while (resultSet.next()) {
                Pojo invoice = new Pojo();
                invoice.setSlNo(resultSet.getInt("sl_no"));
                invoice.setBusinessCode(resultSet.getString("business_code"));
                invoice.setCustNumber(resultSet.getInt("cust_number"));
                invoice.setClearDate(resultSet.getDate("clear_date"));
                invoice.setBusinessYear(resultSet.getInt("business_year"));
                invoice.setDocID(resultSet.getString("doc_id"));
                invoice.setPostingDate(resultSet.getDate("posting_date"));
                invoice.setDocumentCreateDate(resultSet.getDate("document_create_date"));
                invoice.setDueInDate(resultSet.getDate("due_in_date"));
                invoice.setInvoiceCurrency(resultSet.getString("invoice_currency"));
                invoice.setDocumentType(resultSet.getString("document_type"));
                invoice.setPostingID(resultSet.getInt("posting_id"));
                invoice.setTotalOpenAmount(resultSet.getDouble("total_open_amount"));
                invoice.setBaselineCreateDate(resultSet.getDate("baseline_create_date"));
                invoice.setCustPaymentTerms(resultSet.getString("cust_payment_terms"));
                invoice.setInvoiceID(resultSet.getInt("invoice_id"));
                invoice.setIsOpen(resultSet.getInt("isOpen"));
                invoice.setPredictedDate(resultSet.getString("predicted"));
                invoice.setAgingBucket(resultSet.getString("aging_bucket"));

                invoices.add(invoice);

            }
            response.addHeader("Access-Control-Allow-Origin", "*");
            response.addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
            if (request.getMethod().equals("OPTIONS")) {
            	System.out.println("Sent to response!1");
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
            }
            String json = new Gson().toJson(invoices);
            try {
            	response.getWriter().write(json);
            } catch(IOException e) {
            	e.printStackTrace();
            }
            System.out.println("Sent to response!");

        } catch (Exception e) {
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
