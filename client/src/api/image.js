const URL = "http://localhost:3030";

export async function sendImage(formData) {
  try {
    const response = await fetch(`${URL}/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Upload error");
  }
}

export async function GetReceiptById(id, setReceiptData) {
  const response = await fetch(`${URL}/receipt/${id}`);
  const data = await response.json();
  setReceiptData(data);
}

export async function setNewName(id, name) {
  const response = await fetch(`${URL}/receipt/setUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, name: name }),
  });

  const data = await response.json();
  return data;
}
