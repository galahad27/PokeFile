package conndatabase;

import java.sql.*;

public class PokemonDatabase {
	private Connection c = null;
	private Statement stmt = null;
	private ResultSet rs = null;
	
	public PokemonDatabase()
	{
		try{
			Class.forName("org.sqlite.JDBC");
			this.c = DriverManager.getConnection("jdbc:sqlite:databases/pokemon.db");
		}catch(Exception e){
			System.err.println(e.getClass().getName()+ ":"+e.getMessage());
			System.exit(0);
		}
		System.out.println("Open Database");
	}
	
	public void select()
	{
		try{
			this.stmt = this.c.createStatement();
			this.rs = this.stmt.executeQuery("SELECT * FROM POKEMON;");
			
			while(rs.next())
			{
				int nationalNum = rs.getInt("ID");
				String name = rs.getString("NAME");
				System.out.println(nationalNum + " " + name);
			}
		}catch ( Exception e ) {
	      System.err.println( e.getClass().getName() + ": " + e.getMessage() );
	      System.exit(0);
	    }
	}
	
	public static void main(String args[])
	{
		PokemonDatabase db = new PokemonDatabase();
		db.select();
	}
}
