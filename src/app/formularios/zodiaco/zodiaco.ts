
export class Zodiaco {
  

  public static getNombreCompleto(nombre: string, paterno: string, materno: string): string {
    return `${nombre} ${paterno} ${materno}`;
  }


  public static calcularEdad(dia: number, mes: number, anio: number): number {
    const hoy = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia); 
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    
    const mesActual = hoy.getMonth(); 
    const diaActual = hoy.getDate();

    if (mesActual < (mes - 1)) {
      edad--;
    } else {
      if (mesActual === (mes - 1)) {
        if (diaActual < dia) {
          edad--;
        }
      }
    }
    return edad;
  }

  
  public static getSignoZodiacal(anio: number): { nombre: string, imagenUrl: string } {
    const animales = [
     { nombre:'Rata',imagenUrl:'https://peopleenespanol.com/thmb/_1OgeiL_qPw-PDN3P4W4G8AAYsk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165967831-2000-0b5df0ef22b14788998815d899e6a97f.jpg' },     
            { nombre:'Buey',imagenUrl:'https://peopleenespanol.com/thmb/3b5OFomDNAG4HOc-xgkywdaFoEU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165942187-2000-f810031b206d4fa7b64e5f8ad9f2bedd.jpg' },     
            { nombre:'Tigre',imagenUrl:'https://peopleenespanol.com/thmb/Xo7lcQCKPDiCT0WjU7XieSiy_SU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165965551-2000-c9be7d6705b84cf99cdc8b32126e32bb.jpg' },    
            { nombre:'Conejo',imagenUrl:'https://peopleenespanol.com/thmb/YHGXsbH_14NccNN-YAb08oNQ57E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg' },   
            { nombre:'Dragón',imagenUrl:'https://peopleenespanol.com/thmb/3qq9XYUUJV4SnNeyV_TyKnC2iVA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165942305-2000-8fe379790e0e4ccba8ea80e33697647e.jpg' },   
            { nombre:'Serpiente',imagenUrl:'https://peopleenespanol.com/thmb/by99T6NBm8FNbp890x9qSeQ6v3k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg' },
            { nombre:'Caballo',imagenUrl:'https://peopleenespanol.com/thmb/X_hW3ps1TJ0U31lk2BfMiZyyi6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165967001-2000-57bb5c0eac9247e4a6b9afe14505f364.jpg' },  
            { nombre:'Cabra',imagenUrl:'https://peopleenespanol.com/thmb/qTi7W1BzCQmhhgJ0xpRqk2n8890=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg' },    
            { nombre:'Mono',imagenUrl:'https://peopleenespanol.com/thmb/8VWhfhMpai7ORO6tE7uvT0ZGLTQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165967347-2000-141e78d49c344d73a216c09df52f7fcb.jpg' },     
            { nombre:'Gallo',imagenUrl:'https://peopleenespanol.com/thmb/dYkLzX9Pe-PUUGS4QWMGPVRJEsA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg' },    
            { nombre:'Perro',imagenUrl:'https://peopleenespanol.com/thmb/IScdfNT10q3UHyQKxZ7UcJbwswA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165942331-2000-0ba350b9b2214475863744a33bb566c2.jpg' },     
            { nombre:'Cerdo',imagenUrl:'https://peopleenespanol.com/thmb/JlnropInvxmvgdTvwX4WSToXmFs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Horoscopo-chino-165969332-2000-eea5e27d3f4145c9b01121f4c61ccaef.jpg' }          
    ];

    const indice = (anio - 1900) % 12;

    return animales[indice];
  }
}

