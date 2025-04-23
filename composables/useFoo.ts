export const useFoo = () => {
  return useState('foo', () => 'bar')
}

// const foo = useFoo()

/* Scanning pour import auto
-| composables/
---| index.ts     // scanned
---| useFoo.ts    // scanned
---| nested/
-----| utils.ts   // not scanned, devra etre importé manuellement
  */
