'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { X } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useCreateTask } from '@/hooks/use-api';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

import type { TaskWithSubTasks } from '@/types/board.types';

interface Props {
  formData?: TaskWithSubTasks;
}

const formSchema = z.object({
  title: z.string().min(1, '!'),
  description: z.string().nullish(),
  subtasks: z
    .array(
      z.object({
        title: z.string().optional(),
      }),
    )
    .max(3)
    .optional(),
  columnId: z.string().min(1, '!'),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues: Partial<FormSchema> = {
  title: '',
  subtasks: [{ title: '' }, { title: '' }],
  columnId: '',
};

export default function TaskForm({ formData }: Props) {
  const router = useRouter();
  const { boardId } = useParams();

  const { onClose } = useDialogStore();

  const form = useForm<FormSchema>({
    defaultValues: formData ?? defaultValues,
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: 'subtasks',
    control: form.control,
  });

  const { data } = useQuery({
    queryKey: ['columns', { boardId }],
    queryFn: async () => {
      const response = await axios.get(`/api/boards/${boardId}/columns`);
      return response.data;
    },
  });

  const { mutate } = useCreateTask<FormSchema>();

  const onSubmit = async (values: FormSchema) => {
    mutate(values, {
      onSuccess: () => {
        toast.success('The task has been added successfully!');
        onClose();
        router.refresh();
      },
      onError: () => {
        toast.error('Something went wrong. Please try again later!');
        onClose();
        router.refresh();
      },
    });
  };

  return (
    <Form {...form}>
      <form
        id="task-form"
        name="task-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Take coffee break" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || undefined}
                  placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`subtasks.${index}.title`}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Subtasks
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input {...formField} />
                      <button
                        type="button"
                        aria-label="remove"
                        onClick={() => remove(index)}
                      >
                        <X />
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button
            disabled={fields.length >= 3}
            type="button"
            className="w-full"
            onClick={() => append({ title: '' })}
          >
            + Add New Subtask
          </Button>
        </div>
        <FormField
          control={form.control}
          name="columnId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.map((select: { id: string; name: string }) => (
                    <SelectItem key={select.id} value={select.id}>
                      {select.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
