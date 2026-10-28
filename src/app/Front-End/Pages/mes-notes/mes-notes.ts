import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-notes',
  standalone: true,
  imports: [],
  templateUrl: './mes-notes.html',
  styleUrl: './mes-notes.css',
})
export class MesNotes {
  notes: string[] = ['Composant', 'Route', 'Service'];

  ajouter(texte: string): void {
    const t: string = texte.trim();
    if (t) {
      this.notes.push(t);
    }
  }

  // Nouvelle méthode pour supprimer une note selon sa position (index)
  supprimer(index: number): void {
    this.notes.splice(index, 1);
  }
}
