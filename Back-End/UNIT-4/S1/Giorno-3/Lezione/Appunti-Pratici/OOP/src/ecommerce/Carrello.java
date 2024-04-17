package ecommerce;

import java.util.ArrayList;

public class Carrello {
    private Cliente cliente;
    private ArrayList<Articolo> articoli;
    private double totale;

    public Carrello(Cliente cliente) {
        this.cliente = cliente;
        this.articoli = new ArrayList<Articolo>();
    }

    public boolean aggiungiArticolo(Articolo articolo) {
        if (articolo.getQuantita() > 0) {
            articolo.setQuantita(articolo.getQuantita() - 1);
            this.articoli.add(articolo);
            totale += articolo.getPrezzo();
            return true;
        } else {
            return false;
        }
    }

    public void controllaCarrello() {
        System.out.println("Carrello di: "+this.cliente.getNomeCognome());
        System.out.println("Articoli carrello:");
        for (Articolo articolo:articoli) {
            System.out.println("-------------------");
            System.out.println("Nome articolo: "+articolo.getDescrizione());
            System.out.println("Prezzo articolo: "+articolo.getPrezzo());
            System.out.println("Quantità disponibile: "+articolo.getQuantita());
        }
        System.out.println("-----------------------");
        System.out.println("Totale carrello: "+this.totale+" euro");
    }
}
