import AddressForm from "../../../components/forms/AddressForm/AddressForm";
import ContactForm from "../../../components/forms/ContactForm/ContactForm";
import PasswordChangeForm from "../../../components/forms/PasswordChangeForm/PasswordChangeForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import UserApiService from "../../../services/UserApiService";
import { Provider } from "../../../types/user";

export default async function SettingsPage() {
  const user = await UserApiService.me();

  return (
    <div className="flex flex-col gap-8">
      <h1>Settings</h1>
      <Tabs className="items-start" defaultValue="contacts">
        <TabsList className="border-t-2px w-fit flex-col *:font-medium">
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="delivery">Delivery address</TabsTrigger>
          {user.provider === Provider.EMAIL && (
            <TabsTrigger value="password">Password</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="contacts">
          <ContactForm
            defaultValues={{
              name: user.name,
              phoneNumber: user.phoneNumber || undefined,
            }}
          />
        </TabsContent>
        <TabsContent value="delivery">
          <AddressForm defaultValues={user.address || undefined} />
        </TabsContent>
        <TabsContent value="password">{<PasswordChangeForm />}</TabsContent>
      </Tabs>
    </div>
  );
}
