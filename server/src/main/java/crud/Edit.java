package crud;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Edit
 */
@WebServlet("/Edit")
public class Edit extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Edit() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int success = 1;
		int fail = 0;
		int result = fail;
		
		Connect connect = new Connect();
		try {Connection connection = connect.getConnection();
			String slNo, newInvoiceCurrency, newCustomerPaymentTerm;
			
			slNo = (request.getParameter("slno"));
			newInvoiceCurrency = (request.getParameter("invoicecurrency"));
			newCustomerPaymentTerm = (request.getParameter("customerpaymentterm"));
			System.out.println(slNo + " " + newInvoiceCurrency + " " + newCustomerPaymentTerm);
			response.addHeader("Access-Control-Allow-Origin", "*");
	        response.addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
	        if (request.getMethod().equals("OPTIONS")) {
	        	System.out.println("Sent to response!1");
	            response.setStatus(HttpServletResponse.SC_ACCEPTED);
	        }
	
			String query = "UPDATE winter_internship\r\n"
						+ " SET invoice_currency=\"" + newInvoiceCurrency + "\", cust_payment_terms=\""+ newCustomerPaymentTerm + "\"\r\n"
						+ " WHERE sl_no="+slNo;
			PreparedStatement preparedStatement = connection.prepareStatement(query);
	        result = preparedStatement.executeUpdate();
			response.getWriter().write(result);
    		 
    		 
        } catch (SQLException e) {
        	System.out.println(e);
        	
        	 // converting list into JSON Data
    		Gson gson = new Gson();
    		result = fail;
        	
        	// sending JSON Data
    		response.getWriter().write(result);
        } catch (Exception e) {
			// TODO Auto-generated catch block
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
