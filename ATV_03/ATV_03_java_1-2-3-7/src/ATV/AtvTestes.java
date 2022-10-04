package ATV;

public class AtvTestes {
	public static void main(String args[]) {
		AtvCodigos testes = new AtvCodigos();
		
		//atv 01
		boolean quest1 = testes.ehParOuImpar(2);
		System.out.println("q1" +quest1);
		
		//atv 02
		boolean quest2 = testes.ehPrimo(13);
		System.out.println("q2" + quest2);
		
		//atv 03
		testes.nomeComTratamento("Kelsu", "Sr");
		
		//ATV 07
		Runnable Ola = () -> System.out.println("Ola!");
		new Thread(Ola).start();
	}
}