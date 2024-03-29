const todayILearn = {
    _id: 1,
    content: '今天学习 JSON.stringify()，我很开心！',
    created_at: 'Mon Nov 25 2019 14:03:55 GMT+0800 (中国标准时间)',
    updated_at: 'Mon Nov 25 2019 16:03:55 GMT+0800 (中国标准时间)'
  }

  const mapObj = {
    _id: "id",
    created_at: "createdAt",
    updated_at: "updatedAt"
  };

  JSON.parse(
    JSON.stringify(todayILearn).replace(
      /_id|created_at|updated_at/gi,
      matched => mapObj[matched]
    )
  );
  console.log(todayILearn)
