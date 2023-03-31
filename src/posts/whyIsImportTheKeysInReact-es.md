# Porque usar las Keys en ReactJS

<MainImage url='/images/keys.jpeg'/>


<Section>
Cuando trabajamos con React y queremos renderizar un Array de elementos, algo como esto.
</Section>

<Code language='javascript' enableCopyToClipboard='true' showLineNumbers='true'>
const items = [
  {id: 'value-0', value: 'Value 0'},
  {id: 'value-1', value: 'Value 1'},
  {id: 'value-2', value: 'Value 2'},
  {id: 'value-3', value: 'Value 3'},
]

const List = ({ items = [] }) => {
	return (
		<ul>
			{items.map(item => <li>{item.value}</li>)}
		</ul>
	)
}
</Code>

<Section>
Seguramente se encontraron con este tipo de warning en la consola. 
</Section>

<Code language='javascript' enableCopyToClipboard='false' showLineNumbers='true'>
index.js:1 Warning: Each child in a list should have a unique "key" prop.
Check the render method of `List`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at App (http://localhost:3000/static/js/30.chunk.js:48:75)
</Code>

<Section>
En donde basicamente dice que a cada children le agreguemos una prop Key la cual deberia ser única. Si hacemos caso al mensaje y agregamos esta prop, el warning desaparece.
</Section>

<Section>
Pero seria bueno entender un poco más profundo esto, empecemos.
</Section>

<Note>
Una Key es un id para identificar cada elemento hijo.
</Note>

### Que es el Virtual DOM y el Algoritmo de Reconciliación

<Section>
El Virtual DOM es una representación del DOM en forma de árbol de objetos, una abstracción que busca que los cambios sean más faciles de calcular, si estos cambios se harian directamente en el DOM seria muy costoso en terminos de tiempo. Una vez que el virtual DOM termino de actualizarse, se sincroniza con el DOM real.
</Section>

<Image url='/images/virtualDOM.jpeg'/>

<Section>
Para calcular las diferencias entre el DOM real y el virtual DOM, React usa un Algoritmo de Reconciliacion para detectar solo los cambios entre los nodos y reflejarlos en el DOM, actualizando solo los necesarios.
</Section>

### Para que sirve la Key

<Section>
Ahora que vimos que es el Virtual DOM y que existe un algoritmo de reconciliacion, tenemos que entender como se relaciona esto con la Key que asignamos a cada elemento. 
</Section>

<Section>
Basicamente, cuando no agregamos las Keys a la lista el DOM virtual se ve asi:
</Section>

<Code language='javascript' enableCopyToClipboard='true' showLineNumbers='true'>
const List = {
  type: 'ul',
  key: null,
  props: {
	children: [
	  {type: 'Item', key: null, props: {children: 'Value 0'}},
	  {type: 'Item', key: null, props: {children: 'Value 1'}},
	  {type: 'Item', key: null, props: {children: 'Value 2'}},
	  {type: 'Item', key: null, props: {children: 'Value 3'}},
	],
  },
}
</Code>

<Section>
Como podemos ver a cada elemento le falte la Key, eso puede generar problemas de renderizado cuando la actualizamos, ya sea eliminando un elemento o cambiando la informacion.
</Section>

<Section>
Por eso podemos decir que las Keys en React las necesitamos para llevar un registro de los items que fueron cambiados, agregados o eliminados, es decir las key le dan una identidad a los elementos de la lista y con eso React sabe como trabajar correctamente con la lista.
</Section>

<Section>
React usa las keys como un Id por eso deben de ser unicas y estables, es decir no deberian cambiar en todo el ciclo de vida del componente.
</Section>

<Section>
Cuando agregamos las keys el DOM virtual se deberia ver asi:
</Section>



<Code language='javascript' enableCopyToClipboard='true' showLineNumbers='true'>
const List = {
  type: 'ul',
  key: null,
  props: {
	children: [
	  {type: 'Item', key: "value-0", props: {children: 'Value 0'}},
	  {type: 'Item', key: "value-1", props: {children: 'Value 1'}},
	  {type: 'Item', key: "value-2", props: {children: 'Value 2'}},
	  {type: 'Item', key: "value-3", props: {children: 'Value 3'}},
	],
  },
}
</Code>

### ****Conclusión****

<Section>
Podemos decir que las keys son necesarias para que React indentifique cada elemento y pueda trabajar con el. Por eso valor usado en la prop **`key`** debe ser un valor invariable en el tiempo que permita identificar un elemento en concreto, es decir, usar el **`index`** generado por **`Array.map`** no es válido.
</Section>




