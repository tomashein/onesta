import Joi from 'joi';

const HarvestSchema = Joi.object({
  clientId: Joi.string().required().messages({ 'string.empty': 'Client is required' }),
  growerId: Joi.string().required().messages({ 'string.empty': 'Grower is required' }),
  farmId: Joi.string().required().messages({ 'string.empty': 'Farm is required' }),
  commodityId: Joi.string().required().messages({ 'string.empty': 'Commodity is required' }),
  varietyId: Joi.string().required().messages({ 'string.empty': 'Variety is required' })
});

export default HarvestSchema;
