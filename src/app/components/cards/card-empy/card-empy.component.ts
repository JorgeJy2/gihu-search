import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { slideToLeft } from '../../../shared/animations';
import { TYPE_CARD } from '../../../constants/global';

export interface ModelCardDescription {
  title: string;
  message: string;
  image: string;
}

@Component({
  selector: 'app-card-empy',
  templateUrl: './card-empy.component.html',
  styleUrls: ['./card-empy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideToLeft()]
})
export class CardEmpyComponent implements OnInit {

  @Input()
  type: TYPE_CARD;

  descriptions: ModelCardDescription[];
  description: ModelCardDescription;

  constructor() {

    this.descriptions = [
      {
        title: 'Buscar información de usuario',
        message: 'Ingrese el usuario de github para obtener su información.',
        image: 'https://octodex.github.com/images/hula_loop_octodex03.gif'
      },
      {
        title: 'Usuario no encontrado',
        message: 'El usuario ingresado no se encontró en github.',
        image: 'https://octodex.github.com/images/inspectocat.jpg'
      }
    ]
  }

  ngOnInit(): void {
    this.description = (this.type === TYPE_CARD.EMPTY) ? this.descriptions[0] : this.descriptions[1];
  }

}
