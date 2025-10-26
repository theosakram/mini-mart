import InfoBlock from "./InfoBlock";

interface ProductPoliciesProps {
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
}

export default function ProductPolicies({
  shippingInformation,
  warrantyInformation,
  returnPolicy
}: ProductPoliciesProps) {
  return (
    <div className="border-t pt-6 space-y-3">
      <InfoBlock title="Shipping" content={shippingInformation} />
      <InfoBlock title="Warranty" content={warrantyInformation} />
      <InfoBlock title="Returns" content={returnPolicy} />
    </div>
  );
}
