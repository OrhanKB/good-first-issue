import Card from "@/components/card";
import Form from 'next/form';

export default function Home() {
  const options = ["elma", "armut", "kiwi", "muz"];

  return (
    <main className="grid grid-cols-2 p-30">
     <div>
        <h5 className="text-2xl">Filters</h5>
        <Form action="">
          <input type="text" />
          <select name="" id="">
            <option value="">--Seçiniz--</option>
            <option value="">Armut</option>
            <option value="">Muz</option>
            <option value="">Elma</option>
          </select>
        </Form>       
     </div>

     <div>
        <Card />
     </div>
    </main>
  );
}
