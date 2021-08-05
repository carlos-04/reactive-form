import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.scss']
})
export class FormReactivoComponent implements OnInit {

  forma:FormGroup;
  constructor(private fb: FormBuilder) {

    this.agregarValidaciones();
    this.cargarDatos();
   }

  ngOnInit() {
  }


  /* Validando el formulario */
agregarValidaciones(){
  this.forma = this.fb.group({
  nombre: ['', [Validators.required, Validators.minLength(5)]],
  apellido: ['', Validators.required],
  correo: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
  direccion: this.fb.group({
   distrito: ['', Validators.required],
   ciudad: ['', Validators.required]


  })  
})
}


/**Cargar Datos a mi formulario */

cargarDatos(){ 
  this.forma.setValue({
    nombre:  'Carlos',
    apellido: 'Montero',
    correo: 'carlos@gmail.com',
    direccion: {
      distrito: 'san juan',
      ciudad: 'santo domingo'
    }
  })
}

get nombreNoValido(){
 return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
}
get apellidoNoValidado(){
  return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
 }
 get correoNoValidado(){
  return this.forma.get('correo').invalid && this.forma.get('correo').touched;
 }
 get distritoNoValidado(){
  return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
 }
 get ciudadNoValidado(){
  return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
 }
 


 //este codigo me pide las validaciones si el input no esta lleno
guardar(){

  if(this.forma.invalid){
    return Object.values(this.forma.controls).forEach(control => {

      //este codigo me pide las validaciones de los formGroup añaidos dentro
   if(control instanceof FormGroup){
    Object.values(control.controls).forEach(control => control.markAsTouched());
   
  }else{
  
    control.markAsTouched();
   }
   /***************** */

     
    });
  } 
  /**Me resetea los input al postear */

}

}
