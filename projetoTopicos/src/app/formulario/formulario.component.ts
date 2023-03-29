import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comprador } from '../Comprador';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() onSubmit = new EventEmitter<Comprador>();
  @Input() btnText!: string;
  @Input() compradorData: Comprador|null = null;


  compradorForm!: FormGroup;

  ngOnInit(): void{
    if(this.compradorData){
      this.compradorForm = new FormGroup({
        id: new FormControl(this.compradorData.id),
        nome: new FormControl(this.compradorData.nome, [Validators.required]),
        produto: new FormControl(this.compradorData.produto, [Validators.required]),
        vendedor: new FormControl(this.compradorData.vendedor, [Validators.required])
      });
    }else{
      this.compradorForm = new FormGroup({
        id: new FormControl(''),
        nome: new FormControl('', [Validators.required]),
        produto: new FormControl('', [Validators.required]),
        vendedor: new FormControl('', [Validators.required])
      })
    }
  }

  get nome(){
    return this.compradorForm.get('nome')!;
  }
  get produto(){
    return this.compradorForm.get('produto')!;
  }
  get vendedor(){
    return this.compradorForm.get('vendedor')!;
  }

  submit(){
    if(this.compradorForm.invalid){
      return;
    }

    this.onSubmit.emit(this.compradorForm.value);
  }
}
