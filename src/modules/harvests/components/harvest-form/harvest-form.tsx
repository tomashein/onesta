import Alert from '@/components/alert';
import Button from '@/components/button';
import Form from '@/components/form';
import Select from '@/components/select';
import useDrawer from '@/hooks/useDrawer';
import { useClients } from '@/modules/clients';
import { CommodityVariety, useCommodities } from '@/modules/commodities';
import { Farm, useGrowers } from '@/modules/growers';
import { useCallback, useEffect, useState } from 'react';
import HarvestSchema from '../../schemas/harvest-schema';

const HarvestForm = ({ callback }: Props) => {
  const [error, setError] = useState<string>();
  const [state, setState] = useState({
    clientId: '',
    growerId: '',
    farmId: '',
    commodityId: '',
    varietyId: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    clientId: '',
    growerId: '',
    farmId: '',
    commodityId: '',
    varietyId: ''
  });
  const [farms, setFarms] = useState<Farm[]>([]);
  const [varieties, setVarieties] = useState<CommodityVariety[]>([]);
  const { data: clients } = useClients();
  const { data: growers } = useGrowers();
  const { data: commodities } = useCommodities();
  const { closeDrawer } = useDrawer();

  const validateFields = useCallback(
    (nextState: typeof state) => {
      const { error } = HarvestSchema.validate(nextState, { abortEarly: false });
      if (error)
        setErrors(
          error.details.reduce<{ [key: string]: string }>(
            (prev, next) => ({ ...prev, [next.path[0]]: next.message }),
            {}
          )
        );
      else if (Object.keys(errors).length > 0) setErrors({});
    },
    [errors]
  );

  const isFormValid = useCallback(() => {
    const { error } = HarvestSchema.validate(state, { abortEarly: false });
    return !!error;
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.name;
    const nextState = { ...state, [e.target.name]: e.target.value };
    switch (key) {
      case 'growerId':
        nextState.farmId = '';
        break;
      case 'commodityId':
        nextState.varietyId = '';
        break;
      default:
        break;
    }
    validateFields(nextState);
    setState(nextState);
    if (error) setError(undefined);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/harvests', { method: 'POST', body: JSON.stringify(state) });
    if (response.status !== 200) setError('An unexpected error has occurred');
    else {
      callback();
      closeDrawer();
    }
  };

  useEffect(() => {
    if (growers?.collection) {
      setFarms(
        growers.collection.reduce<Farm[]>((prev, next) => {
          if (next.id !== state.growerId) return [...prev];
          return [...prev, ...next.farms];
        }, [])
      );
      setState((prev) => ({ ...prev, farmId: '' }));
    }
  }, [growers, state.growerId]);

  useEffect(() => {
    if (commodities?.collection) {
      setVarieties(
        commodities.collection.reduce<CommodityVariety[]>((prev, next) => {
          if (next.id !== state.commodityId) return [...prev];
          return [...prev, ...next.varieties];
        }, [])
      );
      setState((prev) => ({ ...prev, varietyId: '' }));
    }
  }, [commodities, state.commodityId]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item error={errors.clientId}>
        <label>Client</label>
        <Select name="clientId" onChange={handleChange} value={state.clientId}>
          <option disabled hidden value="" />
          {clients?.collection.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name} {el.lastName}
            </option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item error={errors.growerId}>
        <label>Grower</label>
        <Select name="growerId" onChange={handleChange} value={state.growerId}>
          <option disabled hidden value="" />
          {growers?.collection.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name} {el.lastName}
            </option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item error={errors.farmId}>
        <label>Farm</label>
        <Select name="farmId" onChange={handleChange} value={state.farmId}>
          <option disabled hidden value="" />
          {farms.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item error={errors.commodityId}>
        <label>Commodity</label>
        <Select name="commodityId" onChange={handleChange} value={state.commodityId}>
          <option disabled hidden value="" />
          {commodities?.collection.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item error={errors.varietyId}>
        <label>Variety</label>
        <Select name="varietyId" onChange={handleChange} value={state.varietyId}>
          <option disabled hidden value="" />
          {varieties.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </Select>
      </Form.Item>
      {error && (
        <Alert className="mb-4" type="error">
          {error}
        </Alert>
      )}
      <Form.Actions>
        <Button className="mr-1.5" type="button" onClick={closeDrawer} variant="light">
          Descartar
        </Button>
        <Button className="ml-1.5" disabled={isFormValid()} type="submit" variant="primary">
          Enviar
        </Button>
      </Form.Actions>
    </Form>
  );
};

export default HarvestForm;

type Props = {
  callback: () => void;
};
