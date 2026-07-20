import { redirect } from "next/navigation";

const cityToState: Record<string, string> = {
  "rio-de-janeiro": "RJ",
  "sao-paulo": "SP",
  "curitiba": "PR",
  "florianopolis": "SC",
  "sao-goncalo": "RJ",
  "nova-iguacu": "RJ",
  "belford-roxo": "RJ",
  "itaborai": "RJ",
  "campos-dos-goytacazes": "RJ",
  "resende": "RJ",
  "mage": "RJ",
  "guarulhos": "SP",
  "campinas": "SP",
  "sao-bernardo-do-campo": "SP",
  "londrina": "PR",
  "maringa": "PR",
  "joinville": "SC",
  "blumenau": "SC",
};

export default function CityRedirect({ params }: { params: { city: string } }) {
  const state = cityToState[params.city] || "RJ";
  redirect(`/comprar?estado=${state}`);
}
