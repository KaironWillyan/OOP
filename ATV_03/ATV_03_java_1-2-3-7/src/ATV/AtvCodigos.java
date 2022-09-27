package ATV;
import java.time.format.TextStyle;
import java.util.Arrays;

public class AtvCodigos {
	//ATV 01
	boolean ehParOuImpar(int num) {
		return num % 2 == 0;
	}
	
	//ATV 02
	boolean ehPrimo(int num) {
		int dividiu = 0;
		for (int i = 1; num <= num; i++) {
			if(num % i == 0) {
				dividiu ++;
			}
		}
			return (dividiu == 2);
	}
	
	//ATV 03
	void nomeComTratamento(String nome, String... tratamento) {
		if(tratamento[0] ==
				null) {
			tratamento[0] = "Sr/Sra";
		}
		System.out.println(tratamento[0] + ", " + nome);
	}
}
