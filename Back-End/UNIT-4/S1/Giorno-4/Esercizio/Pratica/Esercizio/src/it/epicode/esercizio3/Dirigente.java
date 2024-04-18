package it.epicode.esercizio3;

public class Dirigente extends Dipendente {
    private double bonus;
    public Dirigente(String matricola, double stipendio, Dipartimento dipartimento, double bonus) {
        super(matricola, stipendio, dipartimento);
        this.bonus = bonus;
    }

    public double calculateSalary() {
        return this.getStipendio() + this.bonus;
    }
}
