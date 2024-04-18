package it.epicode.esercizio3;

public class DipendenteFullTime extends Dipendente {
    public DipendenteFullTime(String matricola, double stipendio, Dipartimento dipartimento) {
        super(matricola, stipendio, dipartimento);
    }

    public double calculateSalary() {
        return this.getStipendio();
    }
}
