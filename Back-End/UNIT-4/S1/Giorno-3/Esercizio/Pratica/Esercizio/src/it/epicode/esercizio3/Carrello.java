package it.epicode.esercizio3;

import java.util.ArrayList;

public class Carrello {
    private Cliente cliente;
    private final ArrayList<Articolo> articoli;
    private double totale;

    public Carrello(Cliente cliente) {
        this.cliente = cliente;
        this.articoli = new ArrayList<Articolo>();
    }

    public boolean aggiungiArticolo(Articolo articolo) {
        if (articolo.getPezzi() > 0) {
            articoli.add(articolo);
            articolo.setPezzi(articolo.getPezzi() - 1);
            totale += articolo.getPrezzo();
            return true;
        } else {
            System.out.println("Articolo non disponibile");
            return false;
        }
    }

    public Cliente getCliente() {
        return cliente;
    }

    public ArrayList<Articolo> getArticoli() {
        return articoli;
    }

    public double getTotale() {
        return totale;
    }

    public void mostraCarrello() {
        System.out.println("Cliente: "+ cliente.getCodice()+" - "+cliente.getNomeCognome());
        System.out.println("Articoli nel carrello:");
        for (Articolo articolo:articoli) {
            System.out.println("- "+articolo.getDescrizione()+ " - Prezzo: "+articolo.getPrezzo()+" euro");
        }
        System.out.println("Totale: "+String.format("%.2f", totale)+" euro");
    }
}
