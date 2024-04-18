package it.epicode.esercizio2;

public class DipendentePartTime extends Dipendente {
    private int oreLavorate;

    public DipendentePartTime(String matricola, double stipendio, Dipartimento dipartimento, int oreLavorate) {
        super(matricola, stipendio, dipartimento);
        this.oreLavorate = oreLavorate;
    }

    public double calculateSalary() {
        return this.getStipendio() * this.oreLavorate;
    }
}
