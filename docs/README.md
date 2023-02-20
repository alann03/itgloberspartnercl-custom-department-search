# Custom Department Search

El componente _Custom Department Search_ permite filtrar una búsqueda en su tienda por departamentos.

![Media Placeholder](/assets/img/custom-department-search.png)

## Configuración

### Paso 1 - Agregar el componente a las dependencias de su aplicación

Dentro del archivo `manifest.json` de su aplicación, debe agregar la siguiente dependencia: 

```json
"dependencies": {
  ...
  "itgloberspartnercl.custom-department-search": "0.x",
  ...
}
```

### Paso 2 - Declarar el bloque principal en su aplicación

Agregue el bloque `department-search` donde requiera utilizarlo dentro de su aplicación. Por ejemplo: 

```json
{
  "department-search": {
    ...
  }
}
```

## Customización

Para aplicar personalizaciones de CSS en este y otros bloques, siga la guía [Uso de identificadores de CSS para la personalización de la tienda](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization).


| CSS HANDLES |
| -- |
| `departmentGroup__container` |
| `departmentGroup__element` |
| `searchBar__container` |

## Colaboradores

- **Alan Agustín Huismann**
