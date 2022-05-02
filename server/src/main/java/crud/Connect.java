package crud;

import java.sql.*;

public class Connect {
	static final String jdbcDriver = "com.mysql.cj.jdbc.Driver";
    static final String url = "jdbc:mysql://localhost:3306/grey_goose";
    static final String username = "root";
    static final String password = "password";
	public Connection getConnection() throws Exception {
        Connection connection = null;
        try {
            Class.forName(jdbcDriver);
            connection = DriverManager.getConnection(url, username, password);
            return connection;
        } catch (Exception error) {
            error.printStackTrace();
        }
        return connection;
    }
	public static void main(String[] args) throws Exception {
        Connect connect = new Connect();
        Connection connection = connect.getConnection();
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery("select * from winter_internship;");
        while(rs.next()) {
        	System.out.println(rs.getString("doc_id"));
        }
    }
}
