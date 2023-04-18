/**
 * Date: 18/04/2023
 * Subject: Inventory Project purchase services
 * Auth: Ismile Satdar
 */

const CheckAssociateService = async (QueryObj, Model) => {
  try {
    const data = await Model.aggregate([{ $match: QueryObj }]);
    // response
    return data.length > 0;
  } catch (error) {
    return false;
  }
};

module.exports = CheckAssociateService;
