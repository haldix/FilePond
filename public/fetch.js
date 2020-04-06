async function ajax(url, method = 'GET', body = null) {
  console.log('FETCH Body', body);
  try {
    let res = await fetch(url, {
      method: method,
      mode: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      //credentials: 'include',
      body: JSON.stringify(body),
    });
    const status = res.status;
    const data = await res.json();
    // if (status === 302) {
    //   window.location = `/meals/saved/${id}`;
    // }
    console.log('data', data);
    return data;
  } catch (err) {
    //TODO: make sure network errs are covered
    console.error(err);
  }
}
