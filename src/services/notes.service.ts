class NotesServiceAPI {
  static #baseUrl = 'http://localhost:3000';
  static url = `${this.#baseUrl}/notes`

  static getNotes = async () => {
    const res = await fetch(this.url);
    const jsonBody = await res.json()
    return jsonBody
  }
}

export default NotesServiceAPI