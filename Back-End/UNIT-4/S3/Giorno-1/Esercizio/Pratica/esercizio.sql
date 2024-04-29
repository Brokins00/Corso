SELECT * FROM public.clienti WHERE nome = 'Mario';

SELECT nome, cognome FROM public.clienti WHERE anno_nascita = 1982;

SELECT COUNT(*) AS numero_di_fatture_iva_20 FROM public.fatture WHERE iva = 20;

SELECT * FROM public.prodotti WHERE EXTRACT(YEAR FROM data_attivazione) = 2017 AND (in_produzione = TRUE OR in_commercio = TRUE);

SELECT f.*, cl.* FROM public.fatture f JOIN public.clienti cl ON f.id_cliente = cl.numero_cliente WHERE importo < 1000;

SELECT fa.numero_fattura, fa.importo, fa.iva, fa.data_fattura, fo.denominazione FROM public.fatture fa JOIN public.fornitori fo ON fa.numero_fornitore = fo.numero_fornitore;

SELECT EXTRACT(YEAR FROM data_fattura) AS anno, COUNT(*) AS numero_di_fatture FROM public.fatture WHERE iva = 20 GROUP BY EXTRACT(YEAR FROM data_fattura);

SELECT EXTRACT(YEAR FROM data_fattura) AS anno, COUNT(*) AS numero_di_fatture, SUM(importo) AS somma_importi FROM public.fatture GROUP BY EXTRACT(YEAR FROM data_fattura);