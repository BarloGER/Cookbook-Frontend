export const DeletePost = async (formData) => {
  try {
    const res = await fetch("https://cookbook-api.onrender.com", {
      method: "DELETE",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const post = await res.json();
    return { post };
  } catch (error) {
    return { error };
  }
};
