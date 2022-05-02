package crud;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class AddNewSlNo
 */
@WebServlet("/NewSlNo")
public class AddNewSlNo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddNewSlNo() {
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
            Statement statement = connection.createStatement();
            String query = "select * from winter_internship;";
            ResultSet resultSet = statement.executeQuery(query);
            int slNo = 0;
            
            while (resultSet.next()) {
                slNo = resultSet.getInt("sl_no");

            }
            response.addHeader("Access-Control-Allow-Origin", "*");
            response.addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");
            if (request.getMethod().equals("OPTIONS")) {
            	System.out.println("Sent to response!1");
                response.setStatus(HttpServletResponse.SC_ACCEPTED);
            }
            slNo += 1;
            String slNoAsString = Integer.toString(slNo);
            try {
            	response.getWriter().write(slNoAsString);
            } catch(IOException e) {
            	e.printStackTrace();
            }
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
