// 3. Dependency Inversion

// If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.
// ! If we extend class we should not override behavior

class Tablet {
  readBook(): void {
    console.log('Enjoy reading!')
  }
}

class AdultsTablet extends Tablet {
  openBrowser(): void {
    console.log('Start searching ...')
  }
}
