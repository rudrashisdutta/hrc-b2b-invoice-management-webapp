package crud;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Delete
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
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
			String slNos[];
			
			slNos = (request.getParameter("slnos")).split("-");
			for(String x : slNos) {
				System.out.println(x);
				
			}
			result = success;
			response.addHeader("Access-Control-Allow-Origin", "*");
	        response.addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
	        if (request.getMethod().equals("OPTIONS")) {
	        	System.out.println("Sent to response!1");
	            response.setStatus(HttpServletResponse.SC_ACCEPTED);
	        }
	        String rowListToDelete = "";
			for(int i=0;i<slNos.length;i++) 
			{
				rowListToDelete = rowListToDelete + slNos[i];
				if(i<slNos.length-1) {
					rowListToDelete = rowListToDelete + ",";
				}
			}
	
			String query = "UPDATE winter_internship\r\n"
						+ " SET is_deleted = 1\r\n"
						+ " WHERE sl_no IN ("+rowListToDelete+")";
			PreparedStatement preparedStatement = connection.prepareStatement(query);
	        preparedStatement.executeUpdate();
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
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
