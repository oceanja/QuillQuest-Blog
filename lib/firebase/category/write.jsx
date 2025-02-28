// categoryFunctions.js
import { db, storage } from "@/lib/firebase";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCategory = async ({ data, image }) => {
  try {
    if (!data?.name) {
      throw new Error("Name is undefined");
    }
    if (!data?.slug) {
      throw new Error("Slug is undefined");
    }
    if (!image) {
      throw new Error("Image is not selected");
    }
    
    const imageRef = ref(storage, `categories/${data.slug}.png`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `categories/${data.slug}`);
    await setDoc(firestoreRef, {
      ...data,
      id: data.slug,
      iconURL: imageURL,
      timestamp: Timestamp.now(),
    });

  } catch (error) {
    console.error("Error creating new category:", error);
    throw error;  // Re-throw the error to be caught by the calling function
  }
};

export const updateCategory = async ({ data, image }) => {
  try {
    if (!data?.name) {
      throw new Error("Name is undefined");
    }
    if (!data?.slug) {
      throw new Error("Slug is undefined");
    }

    let imageURL = data?.iconURL;
    if (image) {
      const imageRef = ref(storage, `categories/${data.slug}.png`);
      await uploadBytes(imageRef, image);
      imageURL = await getDownloadURL(imageRef);
    }

    const firestoreRef = doc(db, `categories/${data.id}`);
    await updateDoc(firestoreRef, {
      ...data,
      iconURL: imageURL,
      timestamp: Timestamp.now(),
    });

  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    if (!id) {
      throw new Error("Id is required");
    }

    await deleteDoc(doc(db, `categories/${id}`));

  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
