const API_URL = "/api/v1/sudoku/solve/"
const API_PROMPT = "196.53...7..21.3...3...6..7.7...241.561374...4.....7..61..2.5.92..6..83..8.53..72"

// TODO: This function needs to be changed to actually get a generated sudoku
async function Request() {
  let requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
		prompt: API_PROMPT
	})
  };

  let response = await fetch(API_URL, requestOptions)
    .then((response) => response.json());

  return response;
}

export default Request;
