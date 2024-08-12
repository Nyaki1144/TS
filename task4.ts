// Write an asynchronous function that fetches data from a mock API and returns the data. Use Promise and async/await.

type data = {
  id: number;
  name: string;
};

function mockApi(url: string): Promise<data> {
  return new Promise((resolve, reject) => {
    if (url === "data") {
      resolve({
        id: 1,
        name: "Sample Data",
      });
    } else {
      reject("Error: URL not found");
    }
  });
}

async function fetchData(url: string): Promise<any> {
  try {
    return await mockApi(url);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}

fetchData("data")
  .then((data) => console.log("Fetched Data:", data))
  .catch((error) => console.error(error));
