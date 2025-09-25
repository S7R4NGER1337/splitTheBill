const URL = "http://localhost:3030"

export async function sendImage(formData) {
  try {
    const response = await fetch(`${URL}/upload"`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data
  } catch (err) {
    console.error("Upload error");
  }
}
