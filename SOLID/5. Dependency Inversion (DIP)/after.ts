// 5. Dependency Inversion (DIP)

// ! High-level modules should not import anything from low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

interface MessengerApi {
  connect: () => void
  send: (targetId: string, message: string) => void
}

class TelegramApi implements MessengerApi {
  connect() {
    console.log('You are connected to Telegram API!')
  }

  send(targetId: string, message: string) {
    console.log(message + ' sent to ' + targetId + ' by Telegram!')
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log('You are connected to Whatsapp API!')
  }

  send(targetId: string, message: string) {
    console.log(message + ' sent to ' + targetId + ' by Whatsapp!')
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log('You are connected to Signal API!')
  }

  send(targetId: string, message: string) {
    console.log(message + ' sent to ' + targetId + ' by Signal!')
  }
}

class Messenger {
  private api: MessengerApi

  constructor(api: MessengerApi) {
    this.api = api
  }

  sendMessage(targetId: string, message: string) {
    this.api.connect()
    this.api.send(targetId, message)
  }
}
