import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriviaComponent } from "./trivia/trivia.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TriviaComponent]
})
export class AppComponent {
  title = 'Poker Hands';
}
